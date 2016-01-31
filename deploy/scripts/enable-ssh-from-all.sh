set -e

echo "Host *" > ~vagrant/.ssh/config
echo "    StrictHostKeyChecking no" >> ~vagrant/.ssh/config
chmod 600 ~vagrant/.ssh/config
chown vagrant.vagrant ~vagrant/.ssh/config
