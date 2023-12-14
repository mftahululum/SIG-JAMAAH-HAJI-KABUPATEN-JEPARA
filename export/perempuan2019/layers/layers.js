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
var format_JEPARAPEREMPUAN2019_0 = new ol.format.GeoJSON();
var features_JEPARAPEREMPUAN2019_0 = format_JEPARAPEREMPUAN2019_0.readFeatures(json_JEPARAPEREMPUAN2019_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEPARAPEREMPUAN2019_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JEPARAPEREMPUAN2019_0.addFeatures(features_JEPARAPEREMPUAN2019_0);var lyr_JEPARAPEREMPUAN2019_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JEPARAPEREMPUAN2019_0, 
                style: style_JEPARAPEREMPUAN2019_0,
    title: 'JEPARA PEREMPUAN 2019<br />\
    <img src="styles/legend/JEPARAPEREMPUAN2019_0_0.png" /> SEDIKIT 3-21<br />\
    <img src="styles/legend/JEPARAPEREMPUAN2019_0_1.png" /> CUKUP 21-40<br />\
    <img src="styles/legend/JEPARAPEREMPUAN2019_0_2.png" /> BANYAK 40-48<br />\
    <img src="styles/legend/JEPARAPEREMPUAN2019_0_3.png" /> SANGAT BANYAK 61-76<br />'
        });

lyr_JEPARAPEREMPUAN2019_0.setVisible(true);
var layersList = [baseLayer,lyr_JEPARAPEREMPUAN2019_0];
lyr_JEPARAPEREMPUAN2019_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'PEREMPUAN 2019': 'PEREMPUAN 2019', });
lyr_JEPARAPEREMPUAN2019_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'PEREMPUAN 2019': 'TextEdit', });
lyr_JEPARAPEREMPUAN2019_0.set('fieldLabels', {'Kecamatan': 'inline label', 'PEREMPUAN 2019': 'inline label', });
lyr_JEPARAPEREMPUAN2019_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});