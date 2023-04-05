class Api::V5::FriendrequestsController < ApplicationController
  def index
    friendrequests = Friendrequest.all()
    render json:friendrequests, status: 200
  end

  def new
    friendrequest = Friendrequest.new
  end

  def create
    friendrequest = Friendrequest.new(sourceuseremail: friendrequest_params[:sourceuseremail], targetuseremail: friendrequest_params[:targetuseremail], date: friendrequest_params[:date])
    if friendrequest.save
      render json:friendrequest, status: 200
    else
      render json: {error: "creating error..."}
    end
  end

  def show
    friendrequest = Friendrequest.find_by(id:params[:id])
    if friendrequest
      render json:friendrequest, status: 200
    else
      render json: {error: "Friendrequest not found!"}
    end
  end

  def update
    friendrequest = Friendrequest.find(params[:id])

    if friendrequest
      friendrequest.update(sourceuseremail: params[:sourceuseremail], targetuseremail: params[:targetuseremail], date:params[:date])
      render json: "Friendrequest updated successfully"
    else
      render json:{ error: "Friendrequest not found"}
    end
  end

  

  def destroy
    friendrequest = Friendrequest.find(params[:id])
    if friendrequest
      friendrequest.destroy
      render json: "Friendrequest deleted successfully"
    end
  end

  private
    def friendrequest_params
      params.require(:friendrequest).permit(:sourceuseremail, :targetuseremail, :date)
    end
end
