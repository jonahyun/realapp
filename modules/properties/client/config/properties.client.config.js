(function () {
  'use strict';

  angular
    .module('properties')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Properties',
      state: 'properties',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'properties', {
      title: 'List Properties',
      state: 'properties.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'properties', {
      title: 'Create Property',
      state: 'properties.create',
      roles: ['user']
    });
  }
}());
