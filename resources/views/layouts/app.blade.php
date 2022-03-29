<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('assets/css/lineicons.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/materialdesignicons.min.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script type="text/javascript">
    (()=> {
        window.Laravel = {
            csrfToken : "{{ csrf_token() }}",
            jsPermissions :  {!! auth()->check() ? auth()->user()->jsPermissions():0 !!}
        }
    })();
</script>
</head>
<body>
    <div id="app">
          @yield('content')
        </div>


  <script src="{{asset('js/app.js') }}" ></script>
</body>
</html>
