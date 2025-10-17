var vg_streamgraph = "charts/streamgraph.vg.json";
var vg_prop_map = "charts/country_visits.vg.json";
var vg_dumbell = "charts/dumbell.vg.json";
var vg_pop_pyr = "charts/pyramid.vg.json"
var vg_par_plot = "charts/parallel.vg.json"
var vg_heatmap = "charts/heatmap_reason.vg.json"
var vg_multi = "charts/multi_chart.vg.json"
var vg_spend = "charts/total_spend.vg.json"
var vg_chlor_map = "charts/state_map.vg.json";
var vg_stacked = "charts/stacked.vg.json";
var vg_bubble = "charts/state_data.vg.json";

vegaEmbed("#streamgraph", vg_streamgraph, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#prop_map", vg_prop_map, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#dumbell", vg_dumbell, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#pop_pyr", vg_pop_pyr, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#par_plot", vg_par_plot, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#heatmap", vg_heatmap, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#multi", vg_multi, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#spend", vg_spend, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#chlor_map", vg_chlor_map, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#stacked", vg_stacked, { "actions": false }
).then(function(result){}).catch(console.error);

vegaEmbed("#bubble", vg_bubble, { "actions": false }
).then(function(result){}).catch(console.error);