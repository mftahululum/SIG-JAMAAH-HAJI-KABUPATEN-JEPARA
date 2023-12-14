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
var format_JEPARAHAJI2019_0 = new ol.format.GeoJSON();
var features_JEPARAHAJI2019_0 = format_JEPARAHAJI2019_0.readFeatures(json_JEPARAHAJI2019_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEPARAHAJI2019_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JEPARAHAJI2019_0.addFeatures(features_JEPARAHAJI2019_0);var lyr_JEPARAHAJI2019_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JEPARAHAJI2019_0, 
                style: style_JEPARAHAJI2019_0,
    title: 'JEPARA HAJI 2019<br />\
    <img src="styles/legend/JEPARAHAJI2019_0_0.png" /> SEDIKIT 7-38<br />\
    <img src="styles/legend/JEPARAHAJI2019_0_1.png" /> CUKUP 38-69<br />\
    <img src="styles/legend/JEPARAHAJI2019_0_2.png" /> BANYAK 69-99<br />\
    <img src="styles/legend/JEPARAHAJI2019_0_3.png" /> SANGAT BANYAK 99-130<br />'
        });

lyr_JEPARAHAJI2019_0.setVisible(true);
var layersList = [baseLayer,lyr_JEPARAHAJI2019_0];
lyr_JEPARAHAJI2019_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'JUMLAH 2019': 'JUMLAH 2019', });
lyr_JEPARAHAJI2019_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'JUMLAH 2019': 'TextEdit', });
lyr_JEPARAHAJI2019_0.set('fieldLabels', {'Kecamatan': 'inline label', 'JUMLAH 2019': 'inline label', });
lyr_JEPARAHAJI2019_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});