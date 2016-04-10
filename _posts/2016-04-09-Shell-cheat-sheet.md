---
layout: post
title:  "GDAL and OGR"
date:   2016-04-09 00:18:23
categories: shell
---

 GDAL and OGR

* [OGR SQL Tutorial](https://github.com/clhenrick/OGR-SQL)


{% highlight sh %}
gdal_rasterize -3d -a_nodata -9999 -tr 0.00027777778 0.00027777778 -tap -l FP_StLouis FP_StLouis.vrt FP_StLouis.tif

for %f in (*Flow.shp) do shp2pgsql -s 4269 -a -D -t 2d %f public.flowlines | psql -U postgres -d nhd -q

for %X in (*.shp) do ogr2ogr -t_srs EPSG:4269 -s_srs EPSG:4326 C:\01_DATA\01_CompleteHydrologyConUSA\Hydropostgis\wgs\4269\%X %X

for %X in (*.shp) do ogr2ogr -f PostgreSQL PG:"dbname=shapes user='postgres' password='elements'" *.shp
{% endhighlight %}

1. [Fresh start shell script for creating ubuntu servers](https://github.com/veltman/fresh-start)
1. [Rename and take out spaces and parathesis](https://unix.stackexchange.com/questions/110213/remove-whitespace-and-parentheses-in-filenames-with-sed)

{% highlight sh %}
for file in ./*; do mv "$file" "${file/ (*)/}"; done
{% endhighlight %}