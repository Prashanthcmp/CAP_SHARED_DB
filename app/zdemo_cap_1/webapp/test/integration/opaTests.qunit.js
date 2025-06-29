sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zdemocap1/test/integration/FirstJourney',
		'zdemocap1/test/integration/pages/BooksList',
		'zdemocap1/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zdemocap1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);