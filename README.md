# reactjs-rails

You can inspect the manifest file from the Rails console which can be useful for debugging: 

```ruby
Rails.application.assets.load_path.manifest
```

It’s available in the Rails console via the helper object:

```ruby
helper.path_to_asset("application.js")
```
