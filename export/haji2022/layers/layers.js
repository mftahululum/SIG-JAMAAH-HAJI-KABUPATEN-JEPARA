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
var format_JAMAAHHAJI2022_0 = new ol.format.GeoJSON();
var features_JAMAAHHAJI2022_0 = format_JAMAAHHAJI2022_0.readFeatures(json_JAMAAHHAJI2022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAMAAHHAJI2022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JAMAAHHAJI2022_0.addFeatures(features_JAMAAHHAJI2022_0);var lyr_JAMAAHHAJI2022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JAMAAHHAJI2022_0, 
                style: style_JAMAAHHAJI2022_0,
    title: 'JAMAAH HAJI 2022<br />\
    <img src="styles/legend/JAMAAHHAJI2022_0_0.png" /> SEDIKIT 2-17<br />\
    <img src="styles/legend/JAMAAHHAJI2022_0_1.png" /> CUKUP 17-32<br />\
    <img src="styles/legend/JAMAAHHAJI2022_0_2.png" /> BANYAK 32-47<br />\
    <img src="styles/legend/JAMAAHHAJI2022_0_3.png" /> SANGAT BANYAK 47-62<br />'
        });

lyr_JAMAAHHAJI2022_0.setVisible(true);
var layersList = [baseLayer,lyr_JAMAAHHAJI2022_0];
lyr_JAMAAHHAJI2022_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'JUMLAH 2022': 'JUMLAH 2022', });
lyr_JAMAAHHAJI2022_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'JUMLAH 2022': 'TextEdit', });
lyr_JAMAAHHAJI2022_0.set('fieldLabels', {'Kecamatan': 'inline label', 'JUMLAH 2022': 'inline label', });
lyr_JAMAAHHAJI2022_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});