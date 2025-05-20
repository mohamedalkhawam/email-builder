import { type TEditorConfiguration } from 'documents/editor/core';

const OTS_DEFAULT: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#F2F5F7',
      canvasColor: '#FFFFFF',
      textColor: '#242424',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'block_3gpSGmkgL4nWSBQjWCjK2z',
        'block_BjpQ7DGTtvaEuYRMd7VE7w',
        'block_xyg4GWmgGbJJEDRQc76bC',
        'block_76VptLCZ47t3EkAarUufEJ',
        'block_Gtk3kDYwsJqEmQf2XGWPRc',
        'block_LACDCzUS2bsvEbmnq1KHuW',
      ],
    },
  },

  block_BjpQ7DGTtvaEuYRMd7VE7w: {
    type: 'Heading',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 32,
          bottom: 0,
          left: 24,
          right: 24,
        },
      },
      props: {
        level: 'h3',
        text: 'Hi OTS Team, Welcome to our Email Builder',
      },
    },
  },

  block_Gtk3kDYwsJqEmQf2XGWPRc: {
    type: 'Divider',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 16,
          bottom: 16,
          left: 24,
          right: 24,
        },
      },
      props: {
        lineHeight: 1,
        lineColor: '#EEEEEE',
      },
    },
  },
  block_LACDCzUS2bsvEbmnq1KHuW: {
    type: 'Text',
    data: {
      style: {
        color: '#474849',
        backgroundColor: null,
        fontSize: 12,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 4,
          bottom: 24,
          left: 24,
          right: 24,
        },
      },
      props: {
        text: 'OTS',
      },
    },
  },
};

export default OTS_DEFAULT;
