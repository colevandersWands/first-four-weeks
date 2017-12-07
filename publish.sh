# add, commit recent changes
git add .
git commit -m 'building'
git checkout master
# enter gitbook source
cd book-src
# build new gitbook
gitbook build
# copy it out of the way for branch change
# f to overwirte last publication
cp -rf ./_book/. ../docs/ 
# return to parent directory
cd ..
# commit recent build
git add .
git commit -m 'publishing'
git push origin master





################################################
#  Recommended file structure for using this script
# 
#	| ## documents, desktop, whatevs ##
# 	|
# 	|- gitbooking ## -> contains only these two folders, ever
# 		|- gitbook ## -> SUMMARY, README, markdowns, config, ...
#		|- book-holder ## -> to stash built gitbook while changing branches

# chmod a+x ./publish.sh