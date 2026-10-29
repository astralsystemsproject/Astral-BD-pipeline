// Astral BD pipeline: settings
//
// Leave `firebase` as null to run in demo mode (data stays in this browser only).
// To share the pipeline with the team, paste your Firebase web app config here.
// See README.md for the five-minute setup.

window.CRM_CONFIG = {
  appName: 'BD pipeline',

  // People who can own a lead (shown in the Owner dropdown)
  owners: ['Harriet', 'Jiffin', 'Ram', 'Talmon'],

  // Names in the Technical lead dropdown
  techLeads: ['Hugo Dominguez', 'Han-Ying', 'Sophie Towel', 'Jonathan Wood', 'Henry Bichard'],

  // Suggested lead sources (people can still type their own)
  sources: ['AI research', "Harriet's network", 'Conference', 'LinkedIn', 'Inbound enquiry', 'Other'],

  // PREVIEW COPY: demo mode only, never connected to the live pipeline
  firebase: null
};
