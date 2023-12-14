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
var format_JEPARALAKI2022_0 = new ol.format.GeoJSON();
var features_JEPARALAKI2022_0 = format_JEPARALAKI2022_0.readFeatures(json_JEPARALAKI2022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEPARALAKI2022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JEPARALAKI2022_0.addFeatures(features_JEPARALAKI2022_0);var lyr_JEPARALAKI2022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JEPARALAKI2022_0, 
                style: style_JEPARALAKI2022_0,
    title: 'JEPARA LAKI 2022<br />\
    <img src="styles/legend/JEPARALAKI2022_0_0.png" /> SEDIKIT 1-8<br />\
    <img src="styles/legend/JEPARALAKI2022_0_1.png" /> CUKUP 8-14<br />\
    <img src="styles/legend/JEPARALAKI2022_0_2.png" /> BANYAK 14-21<br />\
    <img src="styles/legend/JEPARALAKI2022_0_3.png" /> SANGAT BANYAK 21-28<br />'
        });

lyr_JEPARALAKI2022_0.setVisible(true);
var layersList = [baseLayer,lyr_JEPARALAKI2022_0];
lyr_JEPARALAKI2022_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'LAKI-LAKI 2022': 'LAKI-LAKI 2022', });
lyr_JEPARALAKI2022_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'LAKI-LAKI 2022': 'TextEdit', });
lyr_JEPARALAKI2022_0.set('fieldLabels', {'Kecamatan': 'inline label', 'LAKI-LAKI 2022': 'inline label', });
lyr_JEPARALAKI2022_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});