FROM ubuntu
MAINTAINER SSquared

RUN apt-get install -y wget unzip

RUN mkdir -p /var/consul/data
RUN wget -O /tmp/consul.zip https://releases.hashicorp.com/consul/0.6.3/consul_0.6.3_linux_amd64.zip
RUN unzip /tmp/consul.zip -d /var/consul

# RUN mkdir -p /var/vault/data
# RUN wget -O /tmp/vault.zip https://releases.hashicorp.com/consul/0.6.3/consul_0.6.3_linux_amd64.zip
# RUN unzip /tmp/vault.zip -d /var/vault

# The config generator takes envrionment variables and dumps them into the config.
ADD consul-config-generator.sh /tmp/consul-config-generator.sh
RUN chmod 755 /tmp/consul-config-generator.sh

# The first thing to run (generates config)
ENTRYPOINT /tmp/consul-config-generator.sh

# Finally, the command to run
CMD ["/var/consul/consul", "agent", "-config-file=/var/consul/config.json"]
