# -*- mode: ruby -*-
# vi: set ft=ruby :

def configure_ubuntu(hostname, vm, cpus, memory)
  is_windows = (RbConfig::CONFIG['host_os'] =~ /mswin|mingw|cygwin/)

  vm.box = 'hashicorp/precise64'
  vm.hostname = hostname

  vm.provider 'virtualbox' do |vb, override|
    override.vm.network :private_network, ip: "192.168.100.10"
    vb.customize ['modifyvm', :id, '--natdnshostresolver1', 'on']
    vb.customize ['modifyvm', :id, '--natdnsproxy1', 'on']
    vb.cpus = cpus
    vb.memory = memory
    vb.name = "vagrant-#{hostname}"

    if is_windows
      override.vm.synced_folder ".", "/vagrant", mount_options: ["fmode=700"]
    end
  end

  vm.provider 'vmware_fusion' do |vmw, override|
    override.vm.network :private_network, ip: "192.168.100.10"

    vmw.vmx['numvcpus'] = cpus.to_s()
    vmw.vmx['memsize'] = memory.to_s()
    vmw.name = "vagrant-#{hostname}"
    override.vm.synced_folder ".", "/vagrant", mount_options: ["fmode=700"]
  end
end

Vagrant.configure(2) do |config|
  if Vagrant.has_plugin?("vagrant-cachier")
    config.cache.scope = :box
  end
  # Forward ports from the host into the guest
  config.vm.network "forwarded_port", guest: 8500, host: 8500, auto_correct: true

  configure_ubuntu('ssquared-vagrant', config.vm, 4, 4096)

  config.vm.provision 'shell', path: 'scripts/enable-ssh-from-all.sh'
  config.vm.provision 'shell', path: 'scripts/configure-profile.sh'
  config.vm.provision 'shell', path: 'scripts/provision-bin.sh'
  config.vm.provision 'shell', path: 'scripts/install-packages.sh', run: 'always'
end
