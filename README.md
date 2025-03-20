# FasoYaar

<p align="center">
  <img src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg" width="150" alt="Medusa logo">
</p>

<p align="center">
  A full-featured ecommerce platform built with MedusaJS backend and Next.js 14 frontend
</p>

<p align="center">
  <a href="https://railway.app/template/QvfPwp?referralCode=-Yg50p">
    <img src="https://railway.app/button.svg" alt="Deploy on Railway">
  </a>
</p>

<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

## Overview

This project is an Amazon-like ecommerce solution built with [MedusaJS](https://medusajs.com) - an open-source commerce platform that provides the tools you need to build unique commerce experiences. The template uses a monorepo structure with separate backend and frontend services.

> **New Version Alert!** Check out the [MedusaJS 2.0 preview version](https://github.com/rpuls/medusajs-2.0-for-railway-boilerplate)

## Features

### Customer-Facing Features
- **Product Browsing** - Browse products with advanced filtering and search capabilities
- **Shopping Cart** - Add products, manage quantities, and save items for later
- **User Accounts** - Register, login, and manage personal information
- **Order Management** - View order history and track current orders
- **Checkout Process** - Seamless, secure multi-step checkout flow
- **Payment Integration** - Support for multiple payment methods
- **Address Management** - Save and manage multiple shipping addresses
- **Responsive Design** - Optimized shopping experience across all devices

### Admin Dashboard Features
- **Product Management** - Create, edit, and organize products and collections
- **Inventory Control** - Track stock levels and manage inventory
- **Order Processing** - Process, fulfill, and track customer orders
- **Customer Management** - View and manage customer data and purchase history
- **Discount Creation** - Create and manage promotional codes and discounts
- **Analytics Dashboard** - Track sales, customer behavior, and inventory metrics
- **User Roles** - Assign different permission levels to staff members
- **Media Management** - Upload and organize product images with Cloudinary integration

### Technical Features
- **Next.js 14 Frontend** - Leveraging the latest React features for performance
- **MedusaJS Backend** - Modular, headless commerce engine
- **RESTful API** - Full API access for custom integrations
- **PostgreSQL Database** - Reliable, scalable data storage
- **Redis Cache** - High-performance caching for improved speed
- **One-Click Deployment** - Easy deployment with Railway
- **Customizable Themes** - Easily modify the look and feel of your storefront
- **SEO Optimized** - Built with search engine visibility in mind
- **Webhook Support** - Connect with external services and trigger automated workflows

## Project Structure

This repository is a monorepo containing:

1. **medusajs-backend** - The commerce backend handling products, orders, payments, etc.
2. **medusajs-storefront** - A Next.js 14 frontend storefront for your customers

## Quick Start

The easiest way to get started is using Railway's one-click deployment:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/QvfPwp?referralCode=-Yg50p)

## Backend Setup

### Using Railway (Recommended)

1. Click the "Deploy on Railway" button above
2. Change the values of environment variables: `COOKIE_SECRET` and `JWT_SECRET`
3. Railway will automatically set up PostgreSQL and Redis instances

### Local Setup

1. Navigate to the backend directory: `cd medusajs-backend/`
2. Install dependencies: `yarn`
3. Rename `.env.template` to `.env`
4. To connect to an online database (if deployed on Railway): Copy the `DATABASE_URL` from Railway and add it to your `.env` file

### Requirements

- **PostgreSQL database** (automatically generated with Railway template)
- **Redis** (automatically generated with Railway template)

### Optional: Cloudinary Setup for Media Storage

1. Sign up for a free [Cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/yhlpdo1vaw2mq1la0nks) account, choosing "developer API calls" user type
2. Add your `cloud_name`, `api_key` & `api_secret` to `.env`
3. Configure the same environment variables in your Railway dashboard for production

### Backend Commands

```bash
cd medusajs-backend/
yarn build    # Compile the application
yarn dev      # Start local admin dashboard for managing products/orders
yarn start    # Start the backend server (required for storefront)
```

## Storefront Setup

### Local Setup

1. Navigate to the storefront directory: `cd medusajs-storefront/`
2. Install dependencies: `yarn`
3. Rename `.env.local.template` to `.env.local`

### Requirements

- Running backend (`yarn start` in the backend directory) - required to fetch product data

### Storefront Commands

```bash
cd medusajs-storefront/
yarn wait     # Poll the backend until it responds
yarn build    # Build the Next.js app (backend must be running)
yarn start    # Serve the frontend storefront
```

## Need Help?

- [Step-by-step tutorial with screenshots and video](https://funkyton.com/medusajs-free-fully-open-source-ecommerce-solution/)
- Join the [MedusaJS Discord community](https://discord.gg/xpCwq3Kfn8)

---

<p align="center">
  Template created by <a href="https://funkyton.com/">FUNKYTON</a>
</p>
