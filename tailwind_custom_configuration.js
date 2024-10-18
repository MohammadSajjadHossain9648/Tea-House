tailwind.config = {
    theme: {
      extend: {
        colors: {
          white_color: 'rgb(255, 255, 255)',
          shade_white_color: 'rgb(244, 244, 244)',
          shade_white_color_2: 'rgba(244, 244, 244, 0)',
          shade_icon_color: 'rgba(255, 255, 255, 0.05)',

          color_border: 'rgb(210, 210, 210)',

          black_color: 'rgb(28, 28, 28)',
          shade_black_color: 'rgb(73, 73, 73)',

          grey_color_1: 'rgb(119, 119, 119)',
          grey_color_2: 'rgb(93, 90, 111)',

          green_color: 'rgb(14, 122, 129)',

          custom_orange_color: 'rgb(255, 137, 56)',
          custom_red_color: 'rgb(255, 0, 0)',

          color_bg_1: 'rgba(230, 166, 35, 0.1)',
          color_bg_2: 'rgba(87, 118, 57, 0.1)',
          color_bg_3: 'rgb(217, 217, 217)',
          color_bg_4: 'rgba(255, 255, 255, 0)',
          footer_bg_color_1: 'rgba(255, 0, 0, 0.1)',
          footer_bg_color_2: 'rgba(255, 137, 56, 0.1)',
        },
        gridTemplateColumns: {
          'customFraction': '.8fr 1.2fr', // Custom fraction-based column sizes
        },
      }
    }
  }