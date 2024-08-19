var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_maska_kraju_1 = new ol.format.GeoJSON();
var features_maska_kraju_1 = format_maska_kraju_1.readFeatures(json_maska_kraju_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maska_kraju_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maska_kraju_1.addFeatures(features_maska_kraju_1);
var lyr_maska_kraju_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_maska_kraju_1, 
                style: style_maska_kraju_1,
                popuplayertitle: "maska_kraju",
                interactive: true,
                title: '<img src="styles/legend/maska_kraju_1.png" /> maska_kraju'
            });
var format_BiaowieskiParkNarodowy_2 = new ol.format.GeoJSON();
var features_BiaowieskiParkNarodowy_2 = format_BiaowieskiParkNarodowy_2.readFeatures(json_BiaowieskiParkNarodowy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiaowieskiParkNarodowy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiaowieskiParkNarodowy_2.addFeatures(features_BiaowieskiParkNarodowy_2);
var lyr_BiaowieskiParkNarodowy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BiaowieskiParkNarodowy_2, 
                style: style_BiaowieskiParkNarodowy_2,
                popuplayertitle: "Białowieski Park Narodowy",
                interactive: true,
    title: 'Białowieski Park Narodowy<br />\
    <img src="styles/legend/BiaowieskiParkNarodowy_2_0.png" /> obszar parku<br />\
    <img src="styles/legend/BiaowieskiParkNarodowy_2_1.png" /> otulina parku<br />'
        });
var format_obecnestrefyochronywzarzdzieLP_3 = new ol.format.GeoJSON();
var features_obecnestrefyochronywzarzdzieLP_3 = format_obecnestrefyochronywzarzdzieLP_3.readFeatures(json_obecnestrefyochronywzarzdzieLP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_obecnestrefyochronywzarzdzieLP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_obecnestrefyochronywzarzdzieLP_3.addFeatures(features_obecnestrefyochronywzarzdzieLP_3);
var lyr_obecnestrefyochronywzarzdzieLP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_obecnestrefyochronywzarzdzieLP_3, 
                style: style_obecnestrefyochronywzarzdzieLP_3,
                popuplayertitle: "obecne strefy ochrony w zarządzie LP",
                interactive: true,
    title: 'obecne strefy ochrony w zarządzie LP<br />\
    <img src="styles/legend/obecnestrefyochronywzarzdzieLP_3_0.png" /> strefa 2<br />\
    <img src="styles/legend/obecnestrefyochronywzarzdzieLP_3_1.png" /> strefa 3<br />\
    <img src="styles/legend/obecnestrefyochronywzarzdzieLP_3_2.png" /> strefa 4<br />\
    <img src="styles/legend/obecnestrefyochronywzarzdzieLP_3_3.png" /> otulina<br />'
        });
var format_drzewostanyponadstuletniewstrefie4_4 = new ol.format.GeoJSON();
var features_drzewostanyponadstuletniewstrefie4_4 = format_drzewostanyponadstuletniewstrefie4_4.readFeatures(json_drzewostanyponadstuletniewstrefie4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drzewostanyponadstuletniewstrefie4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drzewostanyponadstuletniewstrefie4_4.addFeatures(features_drzewostanyponadstuletniewstrefie4_4);
var lyr_drzewostanyponadstuletniewstrefie4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drzewostanyponadstuletniewstrefie4_4, 
                style: style_drzewostanyponadstuletniewstrefie4_4,
                popuplayertitle: "drzewostany ponadstuletnie w strefie 4",
                interactive: true,
                title: '<img src="styles/legend/drzewostanyponadstuletniewstrefie4_4.png" /> drzewostany ponadstuletnie w strefie 4'
            });
var format_propozycjaLP_5 = new ol.format.GeoJSON();
var features_propozycjaLP_5 = format_propozycjaLP_5.readFeatures(json_propozycjaLP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_propozycjaLP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_propozycjaLP_5.addFeatures(features_propozycjaLP_5);
var lyr_propozycjaLP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_propozycjaLP_5, 
                style: style_propozycjaLP_5,
                popuplayertitle: "propozycja LP",
                interactive: true,
    title: 'propozycja LP<br />\
    <img src="styles/legend/propozycjaLP_5_0.png" /> pozostawienie w strefie 4<br />\
    <img src="styles/legend/propozycjaLP_5_1.png" /> przeniesienie ze strefy 4 do strefy 3<br />'
        });
var format_propozycjarodowiskanaukowego_6 = new ol.format.GeoJSON();
var features_propozycjarodowiskanaukowego_6 = format_propozycjarodowiskanaukowego_6.readFeatures(json_propozycjarodowiskanaukowego_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_propozycjarodowiskanaukowego_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_propozycjarodowiskanaukowego_6.addFeatures(features_propozycjarodowiskanaukowego_6);
var lyr_propozycjarodowiskanaukowego_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_propozycjarodowiskanaukowego_6, 
                style: style_propozycjarodowiskanaukowego_6,
                popuplayertitle: "propozycja środowiska naukowego",
                interactive: true,
    title: 'propozycja środowiska naukowego<br />\
    <img src="styles/legend/propozycjarodowiskanaukowego_6_0.png" /> pozostawienie w strefie 4<br />\
    <img src="styles/legend/propozycjarodowiskanaukowego_6_1.png" /> przeniesienie ze strefy 4 do strefy 3<br />'
        });
var format_granicewydziele_7 = new ol.format.GeoJSON();
var features_granicewydziele_7 = format_granicewydziele_7.readFeatures(json_granicewydziele_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granicewydziele_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granicewydziele_7.addFeatures(features_granicewydziele_7);
var lyr_granicewydziele_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granicewydziele_7, 
                style: style_granicewydziele_7,
                popuplayertitle: "granice wydzieleń",
                interactive: true,
                title: '<img src="styles/legend/granicewydziele_7.png" /> granice wydzieleń'
            });
var group_PB_shp_20240316 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "PB_shp_20240316"});
var group_wydzieleniadoprzesuniciadostrefy3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "wydzielenia do przesunięcia do strefy 3"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_maska_kraju_1.setVisible(true);lyr_BiaowieskiParkNarodowy_2.setVisible(true);lyr_obecnestrefyochronywzarzdzieLP_3.setVisible(true);lyr_drzewostanyponadstuletniewstrefie4_4.setVisible(true);lyr_propozycjaLP_5.setVisible(true);lyr_propozycjarodowiskanaukowego_6.setVisible(true);lyr_granicewydziele_7.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_maska_kraju_1,lyr_BiaowieskiParkNarodowy_2,lyr_obecnestrefyochronywzarzdzieLP_3,lyr_drzewostanyponadstuletniewstrefie4_4,lyr_propozycjaLP_5,lyr_propozycjarodowiskanaukowego_6,lyr_granicewydziele_7];
lyr_maska_kraju_1.set('fieldAliases', {'id': 'id', });
lyr_BiaowieskiParkNarodowy_2.set('fieldAliases', {'gid': 'gid', 'nazwa': 'nazwa', 'kodinspire': 'kodinspire', });
lyr_obecnestrefyochronywzarzdzieLP_3.set('fieldAliases', {'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'area_type': 'area_type', 'site_type': 'site_type', 'silvicult': 'silvicult', 'forest_fun': 'forest_fun', 'stand_stru': 'stand_stru', 'rotat_age': 'rotat_age', 'sub_area': 'sub_area', 'prot_categ': 'prot_categ', 'species_cd': 'species_cd', 'part_cd': 'part_cd', 'spec_age': 'spec_age', 'a_year': 'a_year', 'layer': 'layer', 'path': 'path', 'nr_strefy': 'nr_strefy', 'strefa': 'strefa', 'pow_ha': 'pow_ha', 'nr_old': 'nr_old', 'nr_old_pop': 'nr_old_pop', });
lyr_drzewostanyponadstuletniewstrefie4_4.set('fieldAliases', {'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'area_type': 'area_type', 'site_type': 'site_type', 'silvicult': 'silvicult', 'forest_fun': 'forest_fun', 'stand_stru': 'stand_stru', 'rotat_age': 'rotat_age', 'sub_area': 'sub_area', 'prot_categ': 'prot_categ', 'species_cd': 'species_cd', 'part_cd': 'part_cd', 'spec_age': 'spec_age', 'nr_strefy': 'nr_strefy', 'strefa': 'strefa', 'pow_ha': 'pow_ha', });
lyr_propozycjaLP_5.set('fieldAliases', {'adr_for': 'adr_for', 'propozycja': 'propozycja', 'layer': 'layer', 'path': 'path', });
lyr_propozycjarodowiskanaukowego_6.set('fieldAliases', {'adr_for': 'adr_for', 'propozycja': 'propozycja', });
lyr_granicewydziele_7.set('fieldAliases', {'a_i_num': 'a_i_num', 'adr_for': 'adr_for', 'area_type': 'area_type', 'site_type': 'site_type', 'silvicult': 'silvicult', 'forest_fun': 'forest_fun', 'stand_stru': 'stand_stru', 'rotat_age': 'rotat_age', 'sub_area': 'sub_area', 'prot_categ': 'prot_categ', 'species_cd': 'species_cd', 'part_cd': 'part_cd', 'spec_age': 'spec_age', 'a_year': 'a_year', 'layer': 'layer', 'path': 'path', 'nr_strefy': 'nr_strefy', 'strefa': 'strefa', 'pow_ha': 'pow_ha', 'nr_old': 'nr_old', 'nr_old_pop': 'nr_old_pop', '_area_type_cd': '_area_type_cd', '_site_type_cd': '_site_type_cd', '_moisture_cd': '_moisture_cd', '_degradation_cd': '_degradation_cd', '_soil_subtype_cd': '_soil_subtype_cd', '_plant_comm_cd': '_plant_comm_cd', '_stand_struct_cd': '_stand_struct_cd', '_forest_func_cd': '_forest_func_cd', '_silviculture_cd': '_silviculture_cd', '_rotation_age': '_rotation_age', '_sub_area': '_sub_area', '_veg_cover_cd': '_veg_cover_cd', '_damage_degree': '_damage_degree', '_cause_cd': '_cause_cd', '_density_cd': '_density_cd', '_mixture_cd': '_mixture_cd', '_standdensity_index': '_standdensity_index', '_tree_stock_cd': '_tree_stock_cd', '_st_rank_order_act': '_st_rank_order_act', '_storey_cd': '_storey_cd', '_prot_site_cd': '_prot_site_cd', '_prot_site_state': '_prot_site_state', });
lyr_maska_kraju_1.set('fieldImages', {'id': 'TextEdit', });
lyr_BiaowieskiParkNarodowy_2.set('fieldImages', {'gid': 'Range', 'nazwa': 'TextEdit', 'kodinspire': 'TextEdit', });
lyr_obecnestrefyochronywzarzdzieLP_3.set('fieldImages', {'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'area_type': 'TextEdit', 'site_type': 'TextEdit', 'silvicult': 'TextEdit', 'forest_fun': 'TextEdit', 'stand_stru': 'TextEdit', 'rotat_age': 'TextEdit', 'sub_area': 'TextEdit', 'prot_categ': 'TextEdit', 'species_cd': 'TextEdit', 'part_cd': 'TextEdit', 'spec_age': 'TextEdit', 'a_year': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'nr_strefy': 'Range', 'strefa': 'TextEdit', 'pow_ha': 'TextEdit', 'nr_old': 'Range', 'nr_old_pop': 'Range', });
lyr_drzewostanyponadstuletniewstrefie4_4.set('fieldImages', {'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'area_type': 'TextEdit', 'site_type': 'TextEdit', 'silvicult': 'TextEdit', 'forest_fun': 'TextEdit', 'stand_stru': 'TextEdit', 'rotat_age': 'TextEdit', 'sub_area': 'TextEdit', 'prot_categ': 'TextEdit', 'species_cd': 'TextEdit', 'part_cd': 'TextEdit', 'spec_age': 'TextEdit', 'nr_strefy': 'Range', 'strefa': 'TextEdit', 'pow_ha': 'TextEdit', });
lyr_propozycjaLP_5.set('fieldImages', {'adr_for': 'TextEdit', 'propozycja': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_propozycjarodowiskanaukowego_6.set('fieldImages', {'adr_for': 'TextEdit', 'propozycja': 'TextEdit', });
lyr_granicewydziele_7.set('fieldImages', {'a_i_num': 'TextEdit', 'adr_for': 'TextEdit', 'area_type': 'TextEdit', 'site_type': 'TextEdit', 'silvicult': 'TextEdit', 'forest_fun': 'TextEdit', 'stand_stru': 'TextEdit', 'rotat_age': 'TextEdit', 'sub_area': 'TextEdit', 'prot_categ': 'TextEdit', 'species_cd': 'TextEdit', 'part_cd': 'TextEdit', 'spec_age': 'TextEdit', 'a_year': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'nr_strefy': 'Range', 'strefa': 'TextEdit', 'pow_ha': 'TextEdit', 'nr_old': 'Range', 'nr_old_pop': 'Range', '_area_type_cd': 'TextEdit', '_site_type_cd': 'TextEdit', '_moisture_cd': 'TextEdit', '_degradation_cd': 'TextEdit', '_soil_subtype_cd': 'TextEdit', '_plant_comm_cd': 'TextEdit', '_stand_struct_cd': 'TextEdit', '_forest_func_cd': 'TextEdit', '_silviculture_cd': 'TextEdit', '_rotation_age': 'TextEdit', '_sub_area': 'TextEdit', '_veg_cover_cd': 'TextEdit', '_damage_degree': 'Range', '_cause_cd': 'TextEdit', '_density_cd': 'TextEdit', '_mixture_cd': 'TextEdit', '_standdensity_index': 'TextEdit', '_tree_stock_cd': 'TextEdit', '_st_rank_order_act': 'Range', '_storey_cd': 'TextEdit', '_prot_site_cd': 'TextEdit', '_prot_site_state': 'TextEdit', });
lyr_maska_kraju_1.set('fieldLabels', {'id': 'no label', });
lyr_BiaowieskiParkNarodowy_2.set('fieldLabels', {'gid': 'no label', 'nazwa': 'no label', 'kodinspire': 'no label', });
lyr_obecnestrefyochronywzarzdzieLP_3.set('fieldLabels', {'a_i_num': 'no label', 'adr_for': 'no label', 'area_type': 'no label', 'site_type': 'no label', 'silvicult': 'no label', 'forest_fun': 'no label', 'stand_stru': 'no label', 'rotat_age': 'no label', 'sub_area': 'no label', 'prot_categ': 'no label', 'species_cd': 'no label', 'part_cd': 'no label', 'spec_age': 'no label', 'a_year': 'no label', 'layer': 'no label', 'path': 'no label', 'nr_strefy': 'no label', 'strefa': 'no label', 'pow_ha': 'no label', 'nr_old': 'no label', 'nr_old_pop': 'no label', });
lyr_drzewostanyponadstuletniewstrefie4_4.set('fieldLabels', {'a_i_num': 'no label', 'adr_for': 'header label - always visible', 'area_type': 'header label - visible with data', 'site_type': 'no label', 'silvicult': 'no label', 'forest_fun': 'no label', 'stand_stru': 'no label', 'rotat_age': 'no label', 'sub_area': 'no label', 'prot_categ': 'no label', 'species_cd': 'no label', 'part_cd': 'no label', 'spec_age': 'no label', 'nr_strefy': 'no label', 'strefa': 'no label', 'pow_ha': 'no label', });
lyr_propozycjaLP_5.set('fieldLabels', {'adr_for': 'no label', 'propozycja': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_propozycjarodowiskanaukowego_6.set('fieldLabels', {'adr_for': 'no label', 'propozycja': 'no label', });
lyr_granicewydziele_7.set('fieldLabels', {'a_i_num': 'no label', 'adr_for': 'header label - always visible', 'area_type': 'header label - visible with data', 'site_type': 'header label - visible with data', 'silvicult': 'hidden field', 'forest_fun': 'header label - visible with data', 'stand_stru': 'header label - visible with data', 'rotat_age': 'hidden field', 'sub_area': 'header label - visible with data', 'prot_categ': 'hidden field', 'species_cd': 'header label - visible with data', 'part_cd': 'header label - visible with data', 'spec_age': 'header label - visible with data', 'a_year': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'nr_strefy': 'hidden field', 'strefa': 'hidden field', 'pow_ha': 'hidden field', 'nr_old': 'hidden field', 'nr_old_pop': 'hidden field', '_area_type_cd': 'hidden field', '_site_type_cd': 'hidden field', '_moisture_cd': 'hidden field', '_degradation_cd': 'header label - visible with data', '_soil_subtype_cd': 'hidden field', '_plant_comm_cd': 'hidden field', '_stand_struct_cd': 'hidden field', '_forest_func_cd': 'hidden field', '_silviculture_cd': 'hidden field', '_rotation_age': 'hidden field', '_sub_area': 'hidden field', '_veg_cover_cd': 'hidden field', '_damage_degree': 'hidden field', '_cause_cd': 'hidden field', '_density_cd': 'hidden field', '_mixture_cd': 'hidden field', '_standdensity_index': 'hidden field', '_tree_stock_cd': 'hidden field', '_st_rank_order_act': 'hidden field', '_storey_cd': 'hidden field', '_prot_site_cd': 'header label - visible with data', '_prot_site_state': 'hidden field', });
lyr_granicewydziele_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});