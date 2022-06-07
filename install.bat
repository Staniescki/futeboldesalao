for /f %%i in ("./public/assets") do (
mklink /j "%%i" "./public/dist/assets"
)
