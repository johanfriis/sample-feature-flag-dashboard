import { Schema } from './types'

export const schema: Schema = {
  general: {
    label: 'General',
    id: 'general',
    gap: true,
    wrap: true,
    blocks: [
      {
        label: 'Case Management',
        id: 'caseManagement',
      },
      {
        label: 'Notifications',
        id: 'notifications',
      },
      {
        label: 'Map Timeline',
        id: 'mapTimeline',
      },
      {
        label: 'Mass Communications',
        id: 'massCommunications',
      },
      {
        label: 'Views & Briefings',
        id: 'viewsAndBriefings',
      },
      {
        label: 'Traffic Cameras',
        id: 'trafficCameras',
      },
    ],
  },

  profileSettings: {
    label: 'Profile Settings',
    id: 'profileSettings',
    fillBackground: true,
    blocks: [
      {
        label: 'Audit Log',
        id: 'auditLog',
      },
      {
        label: 'Users',
        id: 'users',
        flags: [
          {
            label: 'Add',
            id: 'add',
          },
          {
            label: 'Delete',
            id: 'delete',
          },
          {
            label: 'Edit',
            id: 'edit',
          },
          {
            label: 'Max Users',
            id: 'maxUsers',
            hasInput: true,
            inputValues: [2, 5, 10, 20, 50],
          },
        ],
      },
    ],
  },

  accountSettings: {
    label: 'Account Settings',
    id: 'accountSettings',
    fillBackground: true,
    blocks: [
      {
        label: 'Audit Log',
        id: 'auditLog',
      },
      {
        label: 'Users',
        id: 'users',
        flags: [
          {
            label: 'Add',
            id: 'add',
          },
          {
            label: 'Delete',
            id: 'delete',
          },
          {
            label: 'Edit',
            id: 'edit',
          },
          {
            label: 'Max Users',
            id: 'maxUsers',
            hasInput: true,
            inputValues: [2, 5, 10, 20, 50],
          },
        ],
      },
    ],
  },

  alerts: {
    label: 'Alerts',
    id: 'alerts',
    blocks: [
      [
        {
          label: 'Alert Manager',
          id: 'alertManager',
        },
        {
          label: 'Alert Rules',
          hasInput: true,
          inputValues: [2, 5, 10, 20, 50],
          id: 'alertRules',
        },
      ],
    ],
  },
}

// export const schema: Schema = [
//   {
//     label: 'General',
//     id: 'general',
//     gap: true,
//     wrap: true,
//     blocks: [
//       {
//         label: 'Case Management',
//         id: 'caseManagement',
//       },
//       {
//         label: 'Notifications',
//         id: 'notifications',
//       },
//       {
//         label: 'Map Timeline',
//         id: 'mapTimeline',
//       },
//       {
//         label: 'Mass Communications',
//         id: 'massCommunications',
//       },
//       {
//         label: 'Views & Briefings',
//         id: 'viewsAndBriefings',
//       },
//       {
//         label: 'Traffic Cameras',
//         id: 'trafficCameras',
//       },
//     ],
//   },

//   {
//     label: 'Profile Settings',
//     id: 'profileSettings',
//     fillBackground: true,
//     width: 'thirds',
//     blocks: [
//       {
//         label: 'Audit Log',
//         id: 'auditLog',
//       },
//       {
//         label: 'Users',
//         id: 'users',
//         flags: [
//           {
//             label: 'Add',
//             id: 'add',
//           },
//           {
//             label: 'Delete',
//             id: 'delete',
//           },
//           {
//             label: 'Edit',
//             id: 'edit',
//           },
//           {
//             label: 'Max Users',
//             id: 'maxUsers',
//             hasInput: true,
//             inputValues: [2, 5, 10, 20, 50],
//           },
//         ],
//       },
//     ],
//   },

//   {
//     label: 'Account Settings',
//     id: 'accountSettings',
//     width: 'thirds',
//     fillBackground: true,
//     blocks: [
//       {
//         label: 'Audit Log',
//         id: 'auditLog',
//       },
//       {
//         label: 'Users',
//         id: 'users',
//         flags: [
//           {
//             label: 'Add',
//             id: 'add',
//           },
//           {
//             label: 'Delete',
//             id: 'delete',
//           },
//           {
//             label: 'Edit',
//             id: 'edit',
//           },
//           {
//             label: 'Max Users',
//             id: 'maxUsers',
//             hasInput: true,
//             inputValues: [2, 5, 10, 20, 50],
//           },
//         ],
//       },
//     ],
//   },

//   {
//     label: 'Alerts',
//     width: 'thirds',
//     id: 'alerts',
//     blocks: [
//       [
//         {
//           label: 'Alert Manager',
//           id: 'alertManager',
//         },
//         {
//           label: 'Alert Rules',
//           hasInput: true,
//           inputValues: [2, 5, 10, 20, 50],
//           id: 'alertRules',
//         },
//       ],
//     ],
//   },
// ]
