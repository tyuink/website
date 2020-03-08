#!/bin/bash

export build='build'
export dir='../deploy'
export file=`date +%Y%m%d%H%M`'.zip'
export server='foo@bar.com'
export path='~/foo/bar/user/'

cd $build
zip -r $dir/$file . -x .DS_Store
scp $dir/$file $server:$path
