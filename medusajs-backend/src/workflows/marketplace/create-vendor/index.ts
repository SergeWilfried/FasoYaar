import { 
    createWorkflow,
    WorkflowResponse,
    transform,
  } from "@medusajs/framework/workflows-sdk"
  import { 
    setAuthAppMetadataStep,
    useQueryGraphStep,
  } from "@medusajs/medusa/core-flows"
  import createVendorAdminStep from "./steps/create-vendor-admin"
  import createVendorStep from "./steps/create-vendor"
  
  export type CreateVendorWorkflowInput = {
    name: string
    handle?: string
    logo?: string
    admin: {
      email: string
      first_name?: string
      last_name?: string
    }
    authIdentityId: string
  }
  
  const createVendorWorkflow = createWorkflow(
    "create-vendor",
    function (input: CreateVendorWorkflowInput) {
      const vendor = createVendorStep({
        name: input.name,
        handle: input.handle,
        logo: input.logo,
      })
  
      const vendorAdminData = transform({
        input,
        vendor,
      }, (data) => {
        return {
          ...data.input.admin,
          vendor_id: data.vendor.id,
        }
      })
  
      const vendorAdmin = createVendorAdminStep(
        vendorAdminData
      )
  
      setAuthAppMetadataStep({
        authIdentityId: input.authIdentityId,
        actorType: "vendor",
        value: vendorAdmin.id,
      })
  
      const { data: vendorWithAdmin } = useQueryGraphStep({
        entity: "vendor",
        fields: ["id", "name", "handle", "logo", "admins.*"],
        filters: {
          id: vendor.id,
        },
      })
  
      const retrievedVendor = vendorWithAdmin[0]
      if (!retrievedVendor) {
        throw new Error("Vendor creation error: no vendor retrieved")
      }
      return new WorkflowResponse({
        vendor: retrievedVendor,
      })
    }
  )
  
  export default createVendorWorkflow