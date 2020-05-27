import '../intro';
function startIntro(){
    var intro = introJs();
      intro.setOptions({
        steps: [
          { 
            intro: "I will make a short presentation about what I have done at this project!"
          },
          { 
            intro: "Please don't be confused regarding russian language on site, JavaScript is international:)Landing isn't made by me, I have written only scripts!"
          },
          {
            element: '#step1',
            intro: "I set up opening modal windows on click"
          },
          {
            element: '#step2',
            intro: "I maked vertical slider without buttons",
            position: 'right'
          },
          {
            element: '#step3',
            intro: "I maked horizontal slider with buttons",
            position: 'top'
          },
          {
            element: '#step4',
            intro: "I set up forms and sending dates to the server",
            position: 'top'
          },
          {
            element: '#step5',
            intro: 'I created a mask for the phone form and forms validation for russian language only',
            position: 'top'
          },
          {
            element: '#step6',
            intro: 'I set up styles downloading from json',
            position: 'top'
          },
          {
            element: '#step7',
            intro: 'I created calculator of total amount',
            position: 'right'
          },
          {
            element: '#step8',
            intro: 'I set up elements filtration on page',
            position: 'top'
          },
          {
            element: '#step9',
            intro: 'I set up changing images on mouse move in and out',
            position: 'top'
          },
          {
            element: '#step10',
            intro: 'I created collapse',
            position: 'top'
          },
          {
            element: '#step11',
            intro: 'I set up burger menu for tablet version',
            position: 'top'
          },
          {
            element: '#step12',
            intro: 'I set up light scroll for using local links',
            position: 'top'
          },
          {
            element: '#step13',
            intro: 'I set up drag and drop for upload forms',
            position: 'top'
          },
          { 
            intro: "If something seems to be unclear please don't hesitate to contact me and I will be glad to provide you more details"
            
          },
        ]
      });

      intro.start();
  }

  export default startIntro;