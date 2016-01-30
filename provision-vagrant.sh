set -e

# install ansible
apt-add-repository ppa:ansible/ansible
apt-get update
apt-get -y install ansible

# install docker_ubuntu
apt-get -y install docker.io
ln -sf /usr/bin/docker.io /usr/local/bin/docker
update-rc.d docker defaults

#docker pull ubuntu

# drop me into /vagrant
echo "cd /vagrant/" >> /home/vagrant/.bashrc
