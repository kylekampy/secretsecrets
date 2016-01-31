set -e

# Get what's needed for add-apt-repository
apt-get install -y python-software-properties

add-apt-repository -y ppa:git-core/ppa
add-apt-repository -y ppa:ansible/ansible

apt-get update

# ALWAYS COWSAY! ALWAYS!
apt-get install -y cowsay git ansible
