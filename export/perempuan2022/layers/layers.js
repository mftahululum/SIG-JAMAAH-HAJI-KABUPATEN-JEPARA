var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_JAMAAHPEREMPUAN2022_0 = new ol.format.GeoJSON();
var features_JAMAAHPEREMPUAN2022_0 = format_JAMAAHPEREMPUAN2022_0.readFeatures(json_JAMAAHPEREMPUAN2022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAMAAHPEREMPUAN2022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JAMAAHPEREMPUAN2022_0.addFeatures(features_JAMAAHPEREMPUAN2022_0);var lyr_JAMAAHPEREMPUAN2022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JAMAAHPEREMPUAN2022_0, 
                style: style_JAMAAHPEREMPUAN2022_0,
    title: 'JAMAAH PEREMPUAN 2022<br />\
    <img src="styles/legend/JAMAAHPEREMPUAN2022_0_0.png" /> SEDIKIT 1-10<br />\
    <img src="styles/legend/JAMAAHPEREMPUAN2022_0_1.png" /> CUKUP 10-18<br />\
    <img src="styles/legend/JAMAAHPEREMPUAN2022_0_2.png" /> BANYAK 18-26<br />\
    <img src="styles/legend/JAMAAHPEREMPUAN2022_0_3.png" /> SANGAT BANYAK 26-34<br />'
        });

lyr_JAMAAHPEREMPUAN2022_0.setVisible(true);
var layersList = [baseLayer,lyr_JAMAAHPEREMPUAN2022_0];
lyr_JAMAAHPEREMPUAN2022_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'PEREMPUAN 2022': 'PEREMPUAN 2022', });
lyr_JAMAAHPEREMPUAN2022_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'PEREMPUAN 2022': 'TextEdit', });
lyr_JAMAAHPEREMPUAN2022_0.set('fieldLabels', {'Kecamatan': 'inline label', 'PEREMPUAN 2022': 'inline label', });
lyr_JAMAAHPEREMPUAN2022_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});