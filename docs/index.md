---
title: Quick Start
---

# Devin's SOC Homelab – Quick Start

This portfolio documents my **SOC analyst homelab**. It simulates an enterprise network with **Active Directory**, **Security Onion (Zeek + Suricata + Elastic/Fleet/Kibana)**, and an **Ubuntu Webserver**. I perform adversary emulation mapped to **MITRE ATT&CK**, build **detection content**, and practice **incident response**.

!!! tip "How to navigate"
    Use the left Table of Contents to jump to **VM Builds**, **Detections**, **Attacks (MITRE)**, and **IR Playbooks**. Each section is self‑contained with commands and screenshots.

## Highlights

- **Coverage:** 9 ATT&CK techniques detected
- **Mean time to detect (MTTD):** 3 minutes and 28 seconds
- **Platform:** VMware, Windows Server 2025 DC, Windows 11 client, Ubuntu DVWA
- **Monitoring:** Security Onion (Kibana dashboards, Sysmon logs, Zeek logs, Suricata alerts), Elastic Agent on endpoints
- **Network:** Isolated **LAN (192.168.25.0/24)**

## What this project demonstrates
- Hands‑on **blue team** skills: log collection, detection engineering, triage, and reporting
- Hands-on **red team** skills: pen testing Active Directory and web applications
- Clear **documentation & reproducibility** for every VM, attack, and detection
