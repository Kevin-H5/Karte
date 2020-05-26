var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Feuerwehrwachen_1 = new ol.format.GeoJSON();
var features_Feuerwehrwachen_1 = format_Feuerwehrwachen_1.readFeatures(json_Feuerwehrwachen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Feuerwehrwachen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feuerwehrwachen_1.addFeatures(features_Feuerwehrwachen_1);
var lyr_Feuerwehrwachen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Feuerwehrwachen_1, 
                style: style_Feuerwehrwachen_1,
                interactive: true,
                title: '<img src="styles/legend/Feuerwehrwachen_1.png" /> Feuerwehrwachen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Feuerwehrwachen_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Feuerwehrwachen_1];
lyr_Feuerwehrwachen_1.set('fieldAliases', {'bezeichnung': 'Bezeichnung', 'strasse': 'Strasse', 'hausnummer': 'Hausnummer', 'postleitzahl': 'Postleitzahl', 'bemerkung': 'bemerkung', 'ab_ort': 'Ort', 'ab_ortsteil': 'Ortsteil', 'ab_x': 'ab_x', 'ab_y': 'ab_y', });
lyr_Feuerwehrwachen_1.set('fieldImages', {'bezeichnung': 'TextEdit', 'strasse': 'TextEdit', 'hausnummer': 'TextEdit', 'postleitzahl': 'Range', 'bemerkung': 'Hidden', 'ab_ort': 'TextEdit', 'ab_ortsteil': 'TextEdit', 'ab_x': 'Hidden', 'ab_y': 'Hidden', });
lyr_Feuerwehrwachen_1.set('fieldLabels', {'bezeichnung': 'inline label', 'strasse': 'inline label', 'hausnummer': 'inline label', 'postleitzahl': 'inline label', 'ab_ort': 'inline label', 'ab_ortsteil': 'inline label', });
lyr_Feuerwehrwachen_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});