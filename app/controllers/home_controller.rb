require 'time'

class HomeController < ApplicationController
  def index
    return if params[:search].nil?
    return if params[:search][:start_date].nil? || params[:search][:end_date].nil?
    start_date = Time.parse(params[:search][:start_date])
    end_date = Time.parse(params[:search][:end_date])
    @result = TimeDifference.between(start_date, end_date).in_days
    @days = @result.to_i
    @hours = (@result.modulo(1) * 24).round
  end
end
