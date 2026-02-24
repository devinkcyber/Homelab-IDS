---
title: Web Server Incident Response
---

# Web Server IR Playbooks

## Playbook: Directory Busting (T1595.0031)
- **Trigger:** Detection rule *WEB-APP possible directory busting* fired.
- **Triage:** Pivot by source.ip
- **Contain:** Block or throttle IP/range via WAF
- **Eradication/Recovery:** Ensure no follow-on to writable endpoints.

## Playbook: Reverse Shell Upload (T1105 & T1190)
- **Trigger:** Detection rule *Zeek HTTP Transfer of PHP File* fired.
- **Triage:** Pivot by destination.ip: 192.168.25.142 and file.mime_type:"text/x-php"
- **Contain:** Block source.ip/range; isolate the webserver
- **Eradication/Recovery:** Quarantine/delete the uploaded PHP file(s) (hash first)

## Playbook: Reverse Shell Connection (T1505.003 & T1071.001)
- **Trigger:** Detection rule *Zeek Outbound TCP 9001 (Potential PHP Reverse Shell)* fired.
- **Triage:** Enumerate related conns; identify owning process/socket on host.
- **Contain:** Block egress to dst/port
- **Eradication/Recovery:** Kill session/process; remove webshell.

## Playbook: Download Linpeas (T1105)
- **Trigger:** Detection rule *LINUX linpeas download via wget* fired.
- **Triage:** Confirm server outbound GET of linpeas.sh with Zeek correlation
- **Contain:** Block outbound HTTP from except allowlist; isolate if found/executed.
- **Eradication/Recovery:** Remove artifact; sweep `/tmp` / `/var/tmp` and check sudo/setuid changes
