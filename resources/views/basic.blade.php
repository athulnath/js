@extends('layouts.app')



@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1></h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <img src="http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/img_01.jpg"/>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-12">
            <button class="btn btn-primary" id="btn-guest-reset">Change guest user</button>
        </div>
    </div>
</div>
@endsection


@section('scripts')
    <script src="{{ asset('js/basic.js') }}"></script>
@endsection



