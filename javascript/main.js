import { Application } from '@hotwired/stimulus';

import LoginController from './controllers/login_controller';
import SlideController from './controllers/slide_controller';

const application = Application.start();

application.register("login", LoginController);
application.register("slide", SlideController);
