import BootstrapComponent from './bootstrap.component';
import BootstrapConfig from './bootstrap.config';
import BootstrapRun from './bootstrap.run';
import '../footer/footer.module';
import '../header/header.module';
import '../navigation/navigation.module';
import '../autocomplete/autocomplete.module';
import '../weather/weatherOfDate.module';
import '../../services/weather/weather.module';
import '../../services/users/users.module';
import '../../services/common/common.module';
import '../../views/weather/weather.module';
import '../../views/home/home.module';
import '../../views/users/users.module';

export default angular
  .module('tgh.component.bootstrap', [
    'tgh.component.footer',
    'tgh.component.header',
    'tgh.component.navigation',
    'tgh.component.autocomplete',
    'tgh.component.weather',
    'tgh.service.common',
    'tgh.service.weather',
    'tgh.service.users',
    'tgh.view.home',
    'tgh.view.users',
    'tgh.view.weather'
  ])
  .config(BootstrapConfig)
  .run(BootstrapRun)
  .directive('tghBootstrap', () => new BootstrapComponent());