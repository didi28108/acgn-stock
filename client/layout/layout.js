'use strict';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { rShowLoginDialog } from './validateDialog';
import { rShowAlertDialog } from './alertDialog';
import { rMainTheme } from '../utils/styles';

Template.layout.helpers({
  currentPage() {
    return FlowRouter.getRouteName();
  },
  showLoginDialog() {
    return rShowLoginDialog.get() && ! Meteor.user();
  },
  showAlertDialog() {
    return rShowAlertDialog.get();
  },
  containerClass() {
    if (rMainTheme.get() === 'light') {
      return 'container container-light';
    }

    return 'container container-dark';
  }
});

