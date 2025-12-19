# GFA Digital Museum - Image Assets Guide

## Local Image Files

All images are stored in `public/images/` directory for optimal performance and offline compatibility.

### Hero Images (Slideshow)
These images are used on all pages as background slideshows:

- **hero-1.jpg** — Ghana Black Stars player celebrating
- **hero-2.jpg** — Ghana National Team squad
- **hero-3.jpg** — Abedi Pele - Ghana football legend
- **hero-4.jpg** — Asamoah Gyan - Black Stars captain

### Archive & Exhibit Images
These images are categorized by type and used across archives and exhibits:

- **trophy.jpg** — AFCON trophy and championship images
  - Used for: 1963 AFCON Trophy, 1965 AFCON Defense, 1978 AFCON Championship, 1982 AFCON Victory, FIFA U-20 World Cup 2009

- **stadium.jpg** — Stadium and venue images
  - Used for: Accra Sports Stadium, Cape Coast Stadium, Stadium Stories

- **celebration.jpg** — Player celebrations and match moments
  - Used for: Black Stars 2010 World Cup, Olympic Bronze 1992, Black Stars Legends

- **memorabilia.jpg** — Vintage items and artifacts
  - Used for: Vintage Memorabilia Collection, Golden Generation Jerseys, Football Artifacts

## Image Requirements

### Optimal Specifications
- **Format:** JPG (for photos) or PNG (for graphics with transparency)
- **Resolution:** 800×600px or higher for exhibits, 1920×1080px for hero images
- **File Size:** Keep under 300KB per image for fast loading
- **Color Space:** RGB

### Image Placement
1. Save images in `public/images/` folder
2. Update references in `public/script.js` (archive data)
3. Update HTML `src` attributes in exhibits and other pages
4. Ensure `onerror` handlers are in place for graceful fallbacks

## Error Handling

All images include automatic error handling:
- **HTML onerror attribute:** Falls back to a styled SVG placeholder
- **JavaScript handler:** `handleImageError()` function adds CSS fallback
- **Lazy loading:** Images use `loading="lazy"` attribute for performance

If an image fails to load:
1. A placeholder image (gray background with text) displays automatically
2. User is informed via alt text
3. Page continues to function normally

## Adding New Images

To add custom images:

1. **Prepare image:** Optimize to 800×600px, max 300KB
2. **Save to `public/images/`:** e.g., `public/images/custom-image.jpg`
3. **Update script.js:** Change archive image references
4. **Add error handler:** Include `onerror="handleImageError(this)"` on HTML img tags
5. **Test locally:**
   ```powershell
   python -m http.server 5500 --directory public
   ```
6. **Verify:** Check that images load and fallback works when temporarily broken

## Creating Placeholder Content

For missing images, use this technique to generate attractive SVG placeholders:

```html
<img 
  src="images/custom.jpg" 
  alt="Description"
  onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 450%22%3E%3Crect fill=%22%23e0e0e0%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22%3EImage Text%3C/text%3E%3C/svg%3E'"
  loading="lazy">
```

## Performance Tips

- Use `loading="lazy"` on all images for lazy loading
- Compress images using tools like TinyPNG or ImageOptim
- Use appropriate formats: JPG for photos, PNG for graphics
- Consider using WebP format for modern browsers (with JPG fallback)
- CDN can be added later for distributed image serving

## Local vs. Remote

**Current Setup:** All images are local
- ✅ Offline support
- ✅ No external dependencies
- ✅ Faster load times (no CDN delay)
- ✅ Complete control over content

**Future Enhancement:** Can integrate CDN (Cloudinary, Imgix)
- Automatic resizing
- Format optimization
- Global distribution
- Detailed analytics
