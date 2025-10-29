---
title: Workstation
---

# Windows 11 – Domain‑Joined Workstation

## Purpose
User endpoint targeted for credential theft and lateral movement.

## Specs
- Hostname: `Workstation-A.lab.local`
- IP: `192.168.25.141`
- Logging: Sysmon, Windows event forwarding via Elastic Agent
- 8gb of memory

## Validation
- Confirm Kerberos/NTLM events in Kibana:
```
host.name : workstation-a AND event.code : 4624
```
![10](img/workstation/a.png){ loading=lazy }

## Install (step-by-step)
<Add Fleet agent page, test alerts, KQL snippets>
![10](img/workstation/10.png){ loading=lazy }
![11](img/workstation/11.png){ loading=lazy }
![12](img/workstation/12.png){ loading=lazy }
![14](img/workstation/14.png){ loading=lazy }
![13](img/workstation/13.png){ loading=lazy }
![16](img/workstation/16.png){ loading=lazy }
![17](img/workstation/17.png){ loading=lazy }
![18](img/workstation/18.png){ loading=lazy }
![19](img/workstation/19.png){ loading=lazy }
