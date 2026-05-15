---
title: "Personal Homelab Infrastructure"
description: "A Proxmox-based self-hosting environment with isolated containers, a Docker VM, reverse proxying, firewall rules, and tiered storage."
category: "Infrastructure"
status: "Featured"
date: "2026"
tags: ["Proxmox", "Debian", "Caddy", "Docker", "ZFS", "Firewall", "Self-hosting"]
featured: true
order: 2
---

## Overview

My homelab runs on Proxmox and is used for self-hosting, experimentation, storage, documentation, and project deployment.

The setup is split into dedicated containers and one Docker VM instead of running all services on a single host.

## System layout

The environment consists of four containers and one virtual machine.

The containers are used for dedicated services, while the VM runs Docker-based application workloads. The reverse proxy is separated from the application host, so public routing and application hosting are not coupled together.

## Storage

The server uses four drives:

- **2 SSDs** for the main system, applications, and fast-access data
- **2 HDDs in a ZFS mirror** for long-term persistent data

This separates fast application workloads from larger long-term storage.

## Network and firewalling

All systems use the Proxmox firewall.

Communication between systems is restricted to the connections that are actually needed. Public access goes through the reverse proxy, while internal services remain isolated behind firewall rules.

## What this project covers

- Proxmox administration
- CT and VM separation
- Reverse proxying with Caddy
- Docker-based application hosting
- ZFS mirror storage planning
- Firewall-based service isolation
