param(
    [string]$Message = "auto update"
)

git add .
if ($LASTEXITCODE -ne 0) { exit 1 }

git commit -m "$Message"
if ($LASTEXITCODE -ne 0) { exit 1 }

git push origin main
if ($LASTEXITCODE -ne 0) { exit 1 }

Write-Host "Pushed successfully with message: $Message" -ForegroundColor Green
