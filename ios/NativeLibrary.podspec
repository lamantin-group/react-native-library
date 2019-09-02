require 'json'
package = JSON.parse(File.read(File.join(__dir__, '../', 'package.json')))

Pod::Spec.new do |s|
  s.name         = package['name']
  s.version      = package['version']
  s.summary      = package['description']
  
  s.author       = { "author" => package['author'] }
  s.source       = { :git => package['repository']['url'], :tag => "master" }
  s.homepage     = package['repository']['url']
  s.license      = package['license']
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.platform     = :ios, "9.0"
  s.source_files  = "NativeLibrary/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  