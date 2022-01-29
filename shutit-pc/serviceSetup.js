import { Service } from 'node-windows';
import "dotenv/config";

// Create a new service object
var svc = new Service({
  name:'Shut It App',
  description: 'Shut it app to shutdown the computer from bed.',
  script: process.env.SCRIPT_DIR
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();