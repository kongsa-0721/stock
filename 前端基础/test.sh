#!/bin/bash
cd './前端基础'
files=$(ls)

all=0
for i in $files; do
  if [ $i != 'test.sh' ]; then
    t=$(wc -m $i)
    temp=`echo $t | tr -cd "[0-9]" `
    all=$(($all + $temp))
    echo '  统计字数: '$t
  fi
done

echo '共计字数' $(($all-50000))