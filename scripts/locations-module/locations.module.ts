import * as angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routes from './locations.routes'

export default angular
    .module('locationModule', [uirouter])
    .config(routes)

import AllLocationsComponent from './components/all-locations/all-locations.component';
AllLocationsComponent.register();

import LocationService from './services/location.service';
LocationService.register();