# Secret Secrets

## Development

The first step is to get the Vagrant machine up and running:
```
vagrant up
```

After a few minutes the initialization of the machine will finish. Then run:
```
vagrant ssh
```

As part of the `vagrant up` process, the necessary docker containers will have started for local development.

Assuming everything went smoothly, open up the ui:
- http://192.168.100.10:8080

Other exposed ports are:
- Vault https: https://192.168.100.10:8181 *(broken)*
- Consul backend: http://192.168.100.10:8500/ui

## Useful links
- [Vault API](https://www.vaultproject.io/docs/http/index.html)
- [Vault Docs](https://www.vaultproject.io/docs/index.html)
