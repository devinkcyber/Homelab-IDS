---
title: Incident Response
---

# IR Playbooks & Case Notes

## Playbook: Suspicious PowerShell on Workstation
- **Trigger:** Detection rule *Suspicious PowerShell* fired.
- **Triage:** Confirm user/process tree; retrieve command line; check network egress.
- **Contain:** Quarantine host (isolate NIC), disable user if compromised.
- **Eradication/Recovery:** Remove persistence, patch, unblock after monitoring.
- **Evidences:** Links to Kibana saved view, hashes, timeline.

## Playbook: Web Shell on DVWA
- **Trigger:** Suricata + Zeek HTTP anomaly.
- **Triage:** Pull web access logs, identify upload, carve sample, VT scan.
- **Contain:** Disable NAT to DVWA, rotate credentials, snapshot for forensics.
- **Lessons Learned:** Tighten egress, add WAF signatures, improve upload filtering.