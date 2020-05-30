default:
	echo "Specify a command!"

init:
	git remote rename origin template
	git branch master --unset-upstream
	chmod +x .githooks/pre-push
	git config core.hooksPath .githooks

clone:
	git remote add template git@github.com:itsvs/starter
	chmod +x .githooks/pre-push
	git config core.hooksPath .githooks

template:
	git pull template master --no-edit
	git push

check:
	prettier --check .

prettier:
	prettier --write .
