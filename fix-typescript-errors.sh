#!/bin/bash

# Fix breadcrumbParent property in all pages
find src/pages -name "*.tsx" -type f -exec sed -i '' 's/breadcrumbParent=".*"//' {} \;
find src/pages/github -name "*.tsx" -type f -exec sed -i '' 's/breadcrumbParent=".*"//' {} \;
find src/pages/tools -name "*.tsx" -type f -exec sed -i '' 's/breadcrumbParent=".*"//' {} \;

# Create empty data files for categories that are missing them
mkdir -p src/data/categories
mkdir -p src/data

# Create empty data files
touch src/data/blogData.ts
touch src/data/faqData.ts
touch src/data/categories/contentCreation.ts
touch src/data/categories/ecommerce.ts
touch src/data/categories/education.ts
touch src/data/categories/gaming.ts
touch src/data/categories/generativeArt.ts
touch src/data/categories/healthWellness.ts
touch src/data/categories/imageDesign.ts
touch src/data/categories/personalFinance.ts
touch src/data/categories/personalProductivity.ts
touch src/data/categories/travelLifestyle.ts

# Add basic content to data files
for file in src/data/categories/*.ts; do
  if [ -f "$file" ] && [ ! -s "$file" ]; then
    echo "export const $(basename $file .ts)Data = {
  title: \"$(basename $file .ts | sed 's/\([a-z0-9]\)\([A-Z]\)/\1 \2/g' | sed 's/^./\U&/g')\",
  gradientClasses: \"bg-gradient-to-br from-blue-200 to-indigo-200\",
  description: \"Description for $(basename $file .ts | sed 's/\([a-z0-9]\)\([A-Z]\)/\1 \2/g' | sed 's/^./\U&/g')\",
  sections: []
};" > "$file"
  fi
done

# Add basic content to blog and FAQ data
echo "export const blogPosts = [];" > src/data/blogData.ts
echo "export const faqData = [];" > src/data/faqData.ts

echo "Fixes applied!"
