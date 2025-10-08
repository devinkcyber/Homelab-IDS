---
title: Appendix – Commands & Config
---

# Appendix – Commands & Config

## Build scripts
```bash
# Example: install Elastic Agent (Linux)
sudo ./elastic-agent install   --url=https://192.168.25.10:8220   --enrollment-token=<token>   --insecure
```

## Useful KQL snippets
```kql
event.code: (4624 or 4625) and winlog.logon.type: 10  // RDP logons
```

## Suricata local rules
```suricata
include: /etc/suricata/rules/local.rules
```

_Add more: GPO exports, Sysmon config, pfSense ruleset export, etc._