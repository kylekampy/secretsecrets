set -e

# install ansible
apt-add-repository ppa:ansible/ansible
apt-get update
apt-get -y install ansible cowsay

# setup ansible to run against the vagrant machine.
mkdir -p /etc/ansible
echo "localhost ansible_connection=local" > /etc/ansible/hosts

# install docker_ubuntu
apt-get -y install docker.io
ln -sf /usr/bin/docker.io /usr/local/bin/docker
update-rc.d docker defaults

# configure
echo "export PATH=/vagrant/bin:$PATH" >> /home/vagrant/.bashrc
echo "export ANSIBLE_CONFIG=/vagrant/ansible.cfg" >> /home/vagrant/.bashrc
echo "cd /vagrant/" >> /home/vagrant/.bashrc

# setup docker with ansible
mkdir -p /etc/ansible/roles
chown -R vagrant:vagrant /etc/ansible
ansible-galaxy install angstwad.docker_ubuntu
docker build -t ssh-container /vagrant/ssh-container
adduser vagrant docker

# ensure bin is executable
chmod +x /vagrant/bin
