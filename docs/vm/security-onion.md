---
title: Security Onion
---

# Security Onion (Fleet • Kibana • Suricata • Zeek)

## Purpose
Single pane for network + endpoint telemetry; manage Elastic Agent, build alerts/dashboards.

## Specs
- Ubuntu (Security Onion ISO)
- NICs: **Mgmt** `192.168.25.10/24`, **Sensor-LAN** (no IP)
- 16gb of memory

## Install (high‑level)
1. Deploy VM from SO ISO → Standalone install.
2. Assign interfaces: `so-mgmt` (IP), `sensor-lan` (no IP).
3. Enable Fleet/Elastic.

## Validation
- Confirm Zeek logs arrive: `index=zeek*` in Kibana:
- Confirm Suricata alerts: `index=so-suricata*` and test with Nmap/nikto from Kali:
- Confirm Elastic Agent heartbeats from each VM:
- Confirm Security Onion containers are up and running:
```
sudo so-status
```
![27](img/securityonion/27.png){ loading=lazy }

## Install (step-by-step)
<Add Fleet agents list, dashboards, Suricata alert views>
![1](img/securityonion/1.png){ loading=lazy }
![2](img/securityonion/2.png){ loading=lazy }
![3](img/securityonion/3.png){ loading=lazy }
![4](img/securityonion/4.png){ loading=lazy }
![5](img/securityonion/5.png){ loading=lazy }
![6](img/securityonion/6.png){ loading=lazy }
![7](img/securityonion/7.png){ loading=lazy }
![8](img/securityonion/8.png){ loading=lazy }
![9](img/securityonion/9.png){ loading=lazy }
![10](img/securityonion/10.png){ loading=lazy }
![11](img/securityonion/11.png){ loading=lazy }
![12](img/securityonion/12.png){ loading=lazy }
![13](img/securityonion/13.png){ loading=lazy }
![14](img/securityonion/14.png){ loading=lazy }
![15](img/securityonion/15.png){ loading=lazy }
![16](img/securityonion/16.png){ loading=lazy }
![17](img/securityonion/17.png){ loading=lazy }
![18](img/securityonion/18.png){ loading=lazy }
![19](img/securityonion/19.png){ loading=lazy }
![20](img/securityonion/20.png){ loading=lazy }
![21](img/securityonion/21.png){ loading=lazy }
![22](img/securityonion/22.png){ loading=lazy }
![23](img/securityonion/23.png){ loading=lazy }
![24](img/securityonion/24.png){ loading=lazy }
![25](img/securityonion/25.png){ loading=lazy }
![26](img/securityonion/26.png){ loading=lazy }
