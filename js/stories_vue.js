
var appUrl = 'https://script.google.com/macros/s/AKfycby-gL9w_PIzt4TDnqfpErNP1YTck93p4j7z1FTpt52bCkryg5Iu/exec';
var sheetsUrl = 'https://docs.google.com/spreadsheets/d/1GNvkC8t3xua_ibN2GnnXJi-MXasuX5SXb4y1G6idFSc/edit#gid=1023127248';
var sheetName = 'landmarks';

	parameter = {
		url: sheetsUrl,
		name: sheetName,
		command: "getRecentStories",
	};

$(document).ready(

    function () {

			var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
const i18n = new VueI18n({
  locale: 'en',
  messages,
})
new Vue({ i18n }).$mount('#dropdown')

        $.get(appUrl, parameter, function (data) {

//            console.log(data);
            data_json = JSON.parse(data);

            for (i in data_json.table) {
                append_stories_list(DivStoriesList, data_json.table[i], 'prepend')
            }


        })
    });



function ShowHideMarker(input, loc,opt) {
    console.log('function:'+arguments.callee.name);
    input.addEventListener('click', () => {
        if (input.checked === false) {
            mymap.removeLayer(loc)
        } else {
            mymap.addLayer(loc)
        }
    })
}

function SingleZoom(name, loc) {
    console.log('function:'+arguments.callee.name);
    name.addEventListener('click', () => {
        mymap.flyTo(loc._latlng, 16, {
            animate: true,
            duration: 0.3
        })
    })
}

function ZoomToGroup(coor) {
    console.log('function:'+arguments.callee.name);
    var markers = L.markerClusterGroup();
    //var landmarks_layergroup = L.layerGroup();

    coor.map(item => L.marker(new L.LatLng(item.lat, item.lng)))
        //.forEach(item => mymap.addLayer(item));
        .forEach((item, i) => {
            markers.addLayer(item)
        });

        let bound = markers.getBounds()
        mymap.fitBounds(bound)

    // ZoomToGroup(markers)
}
