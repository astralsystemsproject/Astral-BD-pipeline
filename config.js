// Astral BD pipeline: settings
//
// Leave `firebase` as null to run in demo mode (data stays in this browser only).
// To share the pipeline with the team, paste your Firebase web app config here.
// See README.md for the five-minute setup.

window.CRM_CONFIG = {
  appName: 'BD pipeline',

  // People who can own a lead (shown in the Owner dropdown)
  owners: ['Harriet', 'Jiffin', 'Ram', 'Talmon'],

  // Suggested lead sources (people can still type their own)
  sources: ['AI research', "Harriet's network", 'Conference', 'LinkedIn', 'Inbound enquiry', 'Other'],

  // Firebase project: astral-bd-326a0
  // (set this back to `firebase: null` to return to demo mode)
  firebase: {
    apiKey: 'AIzaSyAEJM4xnoy6JGWBEMIWnEM78hteotKE6fg',
    authDomain: 'astral-bd-326a0.firebaseapp.com',
    projectId: 'astral-bd-326a0',
    storageBucket: 'astral-bd-326a0.firebasestorage.app',
    messagingSenderId: '766001338914',
    appId: '1:766001338914:web:c2edf07e6d02db5e92887b'
  }
};
