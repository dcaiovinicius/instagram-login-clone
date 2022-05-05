import { Application } from '@hotwired/stimulus';

import LoginController from './controllers/login_controller';

const application = Application.start();

application.register("login", LoginController);
